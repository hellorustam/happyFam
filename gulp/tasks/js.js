import webpack from "webpack-stream";

export const js = () => {
  return app.gulp.src(app.path.src.js)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "JS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(webpack({
      mode: app.isBuild ? "production" : "development",
      entry: {
        main: './src/js/app.js',
        libs: './src/js/libs.js'
      },

      output: {
        filename: "[name].js",
      }
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream())
} 