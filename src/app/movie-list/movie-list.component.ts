import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
  ElementRef,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MovieService, PaginatedMovies } from '../services/movie.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog-component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    RouterModule
  ],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MovieListComponent implements OnInit {
  movies: PaginatedMovies = { items: [], total: 0 };
  currentPage = 0;
  pageSize = 10;
  navigationDirection: 'next' | 'prev' = 'next';

  // Movie cards DOM elements (#card)
  @ViewChildren('card', { read: ElementRef }) cards!: QueryList<ElementRef>;
  // The swiper-container reference (#swiper)
  @ViewChild('swiper', { read: ElementRef }) swiperRef!: ElementRef;

  // Tracking image loading for balancing
  totalImages = 0;
  loadedImages = 0;

  constructor(
    private movieService: MovieService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.fetchMovies();
  }

  fetchMovies() {
    const skip = this.currentPage * this.pageSize;
    this.movieService.getMovies(skip, this.pageSize).subscribe({
      next: (data) => {
        this.movies = data;
        this.totalImages = data.items.filter(item => !!item.image_url).length;
        this.loadedImages = 0;

        // If "next" is selected, it jumps to the beginning of the page; if "prev" is selected, it jumps to the last movie card on the page.
        setTimeout(() => {
          if (
            this.swiperRef &&
            this.swiperRef.nativeElement &&
            this.swiperRef.nativeElement.swiper &&
            typeof this.swiperRef.nativeElement.swiper.slideTo === 'function'
          ) {
            if (this.navigationDirection === 'next') {
              const indexToSlide = this.currentPage > 0 ? 1 : 0;
              this.swiperRef.nativeElement.swiper.slideTo(indexToSlide, 0);
            } else if (this.navigationDirection === 'prev') {
              // We increase the delay to ensure the new DOM is ready.
              setTimeout(() => {
                const offset = this.currentPage > 0 ? 1 : 0;
                const movieSlidesCount = this.movies.items.length;
                const indexToSlide = offset + movieSlidesCount - 1;
                this.swiperRef.nativeElement.swiper.slideTo(indexToSlide, 0);
              }, 100);
            }
          }
        }, 0);
      },
      error: (err) => {
        console.error(err);
        this.dialog.open(ErrorDialogComponent, {
          data: { message: 'Error fetching movies: ' + (err.message || err) }
        });
      }
    });
  }

  nextPage() {
    if ((this.currentPage + 1) * this.pageSize < this.movies.total) {
      this.navigationDirection = 'next';
      this.currentPage++;
      this.fetchMovies();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.navigationDirection = 'prev';
      this.currentPage--;
      this.fetchMovies();
    }
  }

  openErrorDialog(message: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: { message }
    });
  }

  onImageLoad() {
    this.loadedImages++;
    if (this.loadedImages >= this.totalImages) {
      this.equalizeCardHeights();
    }
  }

  equalizeCardHeights() {
    // Reset minHeight to recalculate the actual heights.
    this.cards.forEach((cardRef) => {
      cardRef.nativeElement.style.minHeight = 'auto';
    });
    let maxHeight = 0;
    this.cards.forEach((cardRef) => {
      const h = cardRef.nativeElement.offsetHeight;
      if (h > maxHeight) {
        maxHeight = h;
      }
    });
    // Set the highest height for all cards.
    this.cards.forEach((cardRef) => {
      cardRef.nativeElement.style.minHeight = maxHeight + 'px';
    });
  }
}
