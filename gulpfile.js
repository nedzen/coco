var gulp = require('gulp'),
		sass = require('gulp-sass'),
		jade = require('gulp-jade'),
		plumber = require('gulp-plumber');
		browserSync = require('browser-sync').create();

gulp.task('sass', function(){
	return gulp.src('src/sass/**/*.sass')
		.pipe(plumber())
		.pipe(sass()) // Using gulp-sass
		.on('error', sass.logError)
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('jade', function() {
	return gulp.src('src/tpl/**/*.jade')
		.pipe(jade({pretty: true})) // pip to jade plugin
		.pipe(gulp.dest('dist/')); // tell gulp our output folder
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'dist'
		},
	})
})

gulp.task('watch', ['browserSync', 'sass', 'jade'], function (){
	gulp.watch('src/sass/**/*.sass', ['sass']);
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/tpl/**/*.jade', ['jade']);
	gulp.watch('dist/*.html', browserSync.reload);
});

// gulp.task('default', ['sass', 'jade', 'watch'])
// https://css-tricks.com/gulp-for-beginners/
// http://codepen.io/mgmarlow/post/using-jade-with-gulp