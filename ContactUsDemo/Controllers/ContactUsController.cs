using ContactUsDemo.Models;
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

        private static IList<ContactUsForm> messages = new List<ContactUsForm>();
        private static int currentId = 1;

        [HttpPost]
        public async Task<IHttpActionResult> PostMessage(ContactUsForm form)
        {
            form.Id = currentId++;
            messages.Add(form);
            return Ok();
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetMessages()
        {
            return Ok(messages);
        }
    }
}