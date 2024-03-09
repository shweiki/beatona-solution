using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using BeatonaApi.Models;

namespace BeatonaApi.Controllers
{
    public class ServicesVController : Controller
    {
        private BeatonaEntities db = new BeatonaEntities();

        // GET: ServicesV
        public ActionResult Index()
        {
            var services = db.Services.Include(s => s.CategoriesService);
            return View(services.ToList());
        }

        // GET: ServicesV/Details/5
        public ActionResult Details(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Service service = db.Services.Find(id);
            if (service == null)
            {
                return HttpNotFound();
            }
            return View(service);
        }

        // GET: ServicesV/Create
        public ActionResult Create()
        {
            ViewBag.CategoriesID = new SelectList(db.CategoriesServices, "id", "CategorieNEN");
            return View();
        }

        // POST: ServicesV/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "id,ServiceNEN,ServiceNAR,Description,ValueCoint,CategoriesID,ProviderID")] Service service)
        {
            if (ModelState.IsValid)
            {
                db.Services.Add(service);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.CategoriesID = new SelectList(db.CategoriesServices, "id", "CategorieNEN", service.CategoriesID);
            return View(service);
        }

        // GET: ServicesV/Edit/5
        public ActionResult Edit(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Service service = db.Services.Find(id);
            if (service == null)
            {
                return HttpNotFound();
            }
            ViewBag.CategoriesID = new SelectList(db.CategoriesServices, "id", "CategorieNEN", service.CategoriesID);
            return View(service);
        }

        // POST: ServicesV/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id,ServiceNEN,ServiceNAR,Description,ValueCoint,CategoriesID,ProviderID")] Service service)
        {
            if (ModelState.IsValid)
            {
                db.Entry(service).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.CategoriesID = new SelectList(db.CategoriesServices, "id", "CategorieNEN", service.CategoriesID);
            return View(service);
        }

        // GET: ServicesV/Delete/5
        public ActionResult Delete(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Service service = db.Services.Find(id);
            if (service == null)
            {
                return HttpNotFound();
            }
            return View(service);
        }

        // POST: ServicesV/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(long id)
        {
            Service service = db.Services.Find(id);
            db.Services.Remove(service);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
