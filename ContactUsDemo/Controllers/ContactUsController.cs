using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace ContactUsDemo.Controllers
{
    public class ContactUsController : ApiController
    {

        [HttpPost]
        public async Task<IHttpActionResult> PostMessage()
        {
            return Ok();
        }
    }
}