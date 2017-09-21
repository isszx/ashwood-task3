var gulp      = require('gulp'), // Подключаем Gulp
    sass        = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync = require('browser-sync'); // Подключаем Browser Sync
    autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

// gulp.task('mytask', function () {
//   return gulp.src('source-files') // Выборка исходных файлов для обработки плагином
//     .pipe(plugin()) // Вызов Gulp плагина для обработки файла
//     .pipe(gulp.dest('folder')) // Вывод результирующего файла в папку назначения (dest - пункт назначения)
// })

gulp.task('scss', function(){ // Создаем таск Sass
    return gulp.src('app/scss/**/*.scss') // Берем источник
                .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-scss
                .pipe(autoprefixer(['last 5 versions', '> 1%', 'ie 10'], { cascade: true })) // Создаем префиксы
                .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
                .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'scss'], function() {
    gulp.watch('app/scss/**/*.scss', ['scss']); // Наблюдение за scss файлами
    // Наблюдение за другими типами файлов
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});

gulp.task('default', ['watch']);
