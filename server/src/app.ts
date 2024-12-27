import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import { indexRouter } from './routes/index';
import logger from 'morgan';
import passportConfig from './config/passport';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// authorization
passportConfig(app);

// router
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((_: Request, __: Response, next: NextFunction) => {
    next(createError(404));
});

// error handler
app.use((err: createError.HttpError, req: Request, res: Response, _: NextFunction) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

export default app;
