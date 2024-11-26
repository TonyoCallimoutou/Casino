import {HttpEvent, HttpInterceptorFn} from "@angular/common/http";
import {tap} from "rxjs";

export const responseInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap(
      (event: HttpEvent<any>) => {},
      (error) => {
        console.log(error.error);
        console.log("error on : " + req.url);
      }
    )
  );
};
