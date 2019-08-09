using MbuthaWebAppDemo.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mail;
using System.Web.Mvc;
using MailMessage = System.Net.Mail.MailMessage;

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
            EmailModel model = new EmailModel();
            return View(model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Contact(EmailModel model)
        {
            if(ModelState.IsValid)
            {
                try
                {
                    var body = "<p>Email From: <bold>{0}</bold>(){1}</p><p>Message:</p><p>{2}</p>";

                    var from = "Moses Mwangi Protfolio<mosesmwangi1979@gmail.com>";

                    model.Body = "This is a message from my portfolio site. The name and email from the person contacting you is above.";

                    var email = new MailMessage(from, ConfigurationManager.AppSettings["emailto"])
                    {
                        Subject = "Portfolio Contact Email",
                        Body = string.Format(body, model.FromName, model.FromEmail, model.Body),
                        IsBodyHtml = true
                    };

                    var svc = new PersonalEmail();
                    await svc.SendAsync(email);

                    return View(new EmailModel());
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    await Task.FromResult(0);
                }

            }
            return View(model);
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