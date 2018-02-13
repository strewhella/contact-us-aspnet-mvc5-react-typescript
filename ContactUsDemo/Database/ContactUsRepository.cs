using ContactUsDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Web;

namespace ContactUsDemo.Database
{
    public interface IRepository<T> where T : class
    {
        Task<T> Add(T entity);
        Task<IList<T>> GetAll();
    }

    public class Repository<T> : IRepository<T> where T : class
    {
        private ContactUsDbContext Db { get; set; }

        public Repository(ContactUsDbContext db)
        {
            Db = db;
        }

        public async Task<T> Add(T entity)
        {
            var savedEntity = Db.Set<T>().Add(entity);
            await Db.SaveChangesAsync();
            return savedEntity;
        }

        public async Task<IList<T>> GetAll()
        {
            return await Db.Set<T>().ToListAsync();
        }
    }
}