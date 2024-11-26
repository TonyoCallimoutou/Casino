import {HttpEvent, HttpHandlerFn, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieHelper} from "../../shared/service/cookie.helper";
import {CookieKey} from "../../shared/model/cookie-key";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const token = CookieHelper.get(CookieKey.TOKEN); // Récupérer le token stocké

  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    // Passer la nouvelle requête clonée à la prochaine étape de l'intercepteurs
    return next(authReq);
  }

  // Si aucun token n'est présent, passer la requête telle quelle sans modification
  return next(req);
}
