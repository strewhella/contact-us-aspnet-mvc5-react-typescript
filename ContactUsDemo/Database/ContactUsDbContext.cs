using ContactUsDemo.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ContactUsDemo.Database
{
    public class ContactUsDbContext : DbContext
    {
        public DbSet<ContactUsForm> ContactUsForms { get; set; }

        public ContactUsDbContext() : base("DefaultConnection")
        {
       
        }
    }
}