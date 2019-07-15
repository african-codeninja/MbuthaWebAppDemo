using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MbuthaWebAppDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult BSDemo()
        {
            return View();
        }

        public ActionResult JSDemo()
        {
            return View();
        }
        public ActionResult MathExercise()
        {
            return View();
        }
        public ActionResult LoopDemo()
        {
            return View();
        }

        public ActionResult FactoralDemo()
        {
            return View();
        }

        public ActionResult PalendromeDemo()
        {
            return View();
        }

        public ActionResult FizzBuzzDemo()
        {
            return View();
        }
        public ActionResult SumOfFears()
        {
            return View();
        }
    }
}