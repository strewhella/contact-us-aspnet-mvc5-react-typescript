using ContactUsDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace ContactUsDemo.Attributes
{
    public class ValidateModel : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            var modelState = actionContext.ModelState;
            if (!actionContext.ModelState.IsValid)
            {
                var errors = modelState.Keys
                    .SelectMany(key => modelState[key].Errors)
                    .Select(e => e.ErrorMessage);

                var error = new ErrorResponse()
                {
                    Message = errors.FirstOrDefault()
                };

                actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.BadRequest, error);
            }

            base.OnActionExecuting(actionContext);
        }
    }
}