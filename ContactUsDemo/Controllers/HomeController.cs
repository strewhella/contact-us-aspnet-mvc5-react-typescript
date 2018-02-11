using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using System.Threading.Tasks;

namespace ContactUsDemo.Controllers
{
    public class HomeController : Controller
    {
        public FilePathResult Index()
        {
            return File(Server.MapPath("/app/build/index.html"), "text/html");
        }
    }
}