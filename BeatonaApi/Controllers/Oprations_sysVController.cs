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
    public class Oprations_sysVController : Controller
    {
        private BeatonaEntities db = new BeatonaEntities();

        // GET: Oprations_sysV
        public ActionResult Index()
        {
            return View(db.Oprations_sys.ToList());
        }

        // GET: Oprations_sysV/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Oprations_sys oprations_sys = db.Oprations_sys.Find(id);
            if (oprations_sys == null)
            {
                return HttpNotFound();
            }
            return View(oprations_sys);
        }

        // GET: Oprations_sysV/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Oprations_sysV/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Opration_id,OprationName,Status,OprationDescription,ControllerName,ClassName,TableName,RoleName,ArabicOprationDescription,IconClass,ReferenceStatus")] Oprations_sys oprations_sys)
        {
            if (ModelState.IsValid)
            {
                db.Oprations_sys.Add(oprations_sys);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(oprations_sys);
        }

        // GET: Oprations_sysV/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Oprations_sys oprations_sys = db.Oprations_sys.Find(id);
            if (oprations_sys == null)
            {
                return HttpNotFound();
            }
            return View(oprations_sys);
        }

        // POST: Oprations_sysV/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Opration_id,OprationName,Status,OprationDescription,ControllerName,ClassName,TableName,RoleName,ArabicOprationDescription,IconClass,ReferenceStatus")] Oprations_sys oprations_sys)
        {
            if (ModelState.IsValid)
            {
                db.Entry(oprations_sys).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(oprations_sys);
        }

        // GET: Oprations_sysV/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Oprations_sys oprations_sys = db.Oprations_sys.Find(id);
            if (oprations_sys == null)
            {
                return HttpNotFound();
            }
            return View(oprations_sys);
        }

        // POST: Oprations_sysV/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Oprations_sys oprations_sys = db.Oprations_sys.Find(id);
            db.Oprations_sys.Remove(oprations_sys);
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
