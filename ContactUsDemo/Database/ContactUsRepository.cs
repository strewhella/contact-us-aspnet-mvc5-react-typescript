using ContactUsDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Web;

namespace ContactUsDemo.Database
{
    public interface IContactUsRepository
    {
        Task<ContactUsForm> SaveContactUsForm(ContactUsForm form);
        Task<IList<ContactUsForm>> GetContactUsForms();
    }

    public class ContactUsRepository : IContactUsRepository
    {
        public async Task<ContactUsForm> SaveContactUsForm(ContactUsForm form)
        {
            using (var db = new ContactUsDbContext())
            {
                var savedForm = db.ContactUsForms.Add(form);
                await db.SaveChangesAsync();
                return savedForm;
            }
        }

        public async Task<IList<ContactUsForm>> GetContactUsForms()
        {
            using (var db = new ContactUsDbContext())
            {
                return await db.ContactUsForms.ToListAsync();
            }
        }
    }
}