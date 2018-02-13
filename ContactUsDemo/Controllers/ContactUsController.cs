using ContactUsDemo.Attributes;
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
        public IRepository<ContactUsForm> Repo { get; set; }

        public ContactUsController(IRepository<ContactUsForm> repo)
        {
            Repo = repo;
        }

        [HttpPost]
        [ValidateModel]
        public async Task<IHttpActionResult> PostMessage(ContactUsForm form)
        {
            var savedForm = await Repo.Add(form);

            return Ok(savedForm);
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetMessages()
        {
            var messages = await Repo.GetAll();

            return Ok(messages);
        }
    }
}