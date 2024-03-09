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
    public class WasteTypesVController : Controller
    {
        private BeatonaEntities db = new BeatonaEntities();

        // GET: WasteTypesV
        public ActionResult Index()
        {
            return View(db.WasteTypes.ToList());
        }

        // GET: WasteTypesV/Details/5
        public ActionResult Details(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            WasteType wasteType = db.WasteTypes.Find(id);
            if (wasteType == null)
            {
                return HttpNotFound();
            }
            return View(wasteType);
        }

        // GET: WasteTypesV/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: WasteTypesV/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,AName,EName,Color,Image,Status,Evaluation,Note,Posting_DateTime,Cost")] WasteType wasteType)
        {
            if (ModelState.IsValid)
            {
                DateTime now = new DateTime();
                wasteType.Posting_DateTime = now;
                db.WasteTypes.Add(wasteType);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(wasteType);
        }

        // GET: WasteTypesV/Edit/5
        public ActionResult Edit(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            WasteType wasteType = db.WasteTypes.Find(id);
            if (wasteType == null)
            {
                return HttpNotFound();
            }
            return View(wasteType);
        }

        // POST: WasteTypesV/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,AName,EName,Color,Image,Status,Evaluation,Note,Posting_DateTime,Cost")] WasteType wasteType)
        {
            if (ModelState.IsValid)
            {
                db.Entry(wasteType).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(wasteType);
        }

        // GET: WasteTypesV/Delete/5
        public ActionResult Delete(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            WasteType wasteType = db.WasteTypes.Find(id);
            if (wasteType == null)
            {
                return HttpNotFound();
            }
            return View(wasteType);
        }

        // POST: WasteTypesV/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(long id)
        {
            WasteType wasteType = db.WasteTypes.Find(id);
            db.WasteTypes.Remove(wasteType);
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
