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
    public class CategoriesServicesVController : Controller
    {
        private BeatonaEntities db = new BeatonaEntities();

        // GET: CategoriesServicesV
        public ActionResult Index()
        {
            return View(db.CategoriesServices.ToList());
        }

        // GET: CategoriesServicesV/Details/5
        public ActionResult Details(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CategoriesService categoriesService = db.CategoriesServices.Find(id);
            if (categoriesService == null)
            {
                return HttpNotFound();
            }
            return View(categoriesService);
        }

        // GET: CategoriesServicesV/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: CategoriesServicesV/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "id,CategorieNEN,CategorieNAR,Code,Icon,Status")] CategoriesService categoriesService)
        {
            if (ModelState.IsValid)
            {
                db.CategoriesServices.Add(categoriesService);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(categoriesService);
        }

        // GET: CategoriesServicesV/Edit/5
        public ActionResult Edit(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CategoriesService categoriesService = db.CategoriesServices.Find(id);
            if (categoriesService == null)
            {
                return HttpNotFound();
            }
            return View(categoriesService);
        }

        // POST: CategoriesServicesV/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id,CategorieNEN,CategorieNAR,Code,Icon,Status")] CategoriesService categoriesService)
        {
            if (ModelState.IsValid)
            {
                db.Entry(categoriesService).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(categoriesService);
        }

        // GET: CategoriesServicesV/Delete/5
        public ActionResult Delete(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CategoriesService categoriesService = db.CategoriesServices.Find(id);
            if (categoriesService == null)
            {
                return HttpNotFound();
            }
            return View(categoriesService);
        }

        // POST: CategoriesServicesV/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(long id)
        {
            CategoriesService categoriesService = db.CategoriesServices.Find(id);
            db.CategoriesServices.Remove(categoriesService);
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
