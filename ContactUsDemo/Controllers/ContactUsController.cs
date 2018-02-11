using ContactUsDemo.Database;
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
        public IContactUsRepository Repo { get; set; }

        public ContactUsController(IContactUsRepository repo)
        {
            Repo = repo;
        }

        [HttpPost]
        public async Task<IHttpActionResult> PostMessage(ContactUsForm form)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var savedForm = await Repo.SaveContactUsForm(form);

            return Ok(savedForm);
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetMessages()
        {
            var messages = await Repo.GetContactUsForms();

            return Ok(messages);
        }
    }
}