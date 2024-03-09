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
    public class Actions_LogVController : Controller
    {
        private BeatonaEntities db = new BeatonaEntities();

        // GET: Actions_LogV
        public ActionResult Index()
        {
            var actions_Log = db.Actions_Log.Include(a => a.AspNetUser).Include(a => a.Oprations_sys);
            return View(actions_Log.ToList());
        }

        // GET: Actions_LogV/Details/5
        public ActionResult Details(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Actions_Log actions_Log = db.Actions_Log.Find(id);
            if (actions_Log == null)
            {
                return HttpNotFound();
            }
            return View(actions_Log);
        }

        // GET: Actions_LogV/Create
        public ActionResult Create()
        {
            ViewBag.User_ID_Posting = new SelectList(db.AspNetUsers, "Id", "FullName");
            ViewBag.Opration_id = new SelectList(db.Oprations_sys, "Opration_id", "OprationName");
            return View();
        }

        // POST: Actions_LogV/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Action_id,Opration_id,Posting_DateTime,description_status,User_ID_Posting,VisitID,Note")] Actions_Log actions_Log)
        {
            if (ModelState.IsValid)
            {
                db.Actions_Log.Add(actions_Log);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.User_ID_Posting = new SelectList(db.AspNetUsers, "Id", "FullName", actions_Log.User_ID_Posting);
            ViewBag.Opration_id = new SelectList(db.Oprations_sys, "Opration_id", "OprationName", actions_Log.Opration_id);
            return View(actions_Log);
        }

        // GET: Actions_LogV/Edit/5
        public ActionResult Edit(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Actions_Log actions_Log = db.Actions_Log.Find(id);
            if (actions_Log == null)
            {
                return HttpNotFound();
            }
            ViewBag.User_ID_Posting = new SelectList(db.AspNetUsers, "Id", "FullName", actions_Log.User_ID_Posting);
            ViewBag.Opration_id = new SelectList(db.Oprations_sys, "Opration_id", "OprationName", actions_Log.Opration_id);
            return View(actions_Log);
        }

        // POST: Actions_LogV/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Action_id,Opration_id,Posting_DateTime,description_status,User_ID_Posting,VisitID,Note")] Actions_Log actions_Log)
        {
            if (ModelState.IsValid)
            {
                db.Entry(actions_Log).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.User_ID_Posting = new SelectList(db.AspNetUsers, "Id", "FullName", actions_Log.User_ID_Posting);
            ViewBag.Opration_id = new SelectList(db.Oprations_sys, "Opration_id", "OprationName", actions_Log.Opration_id);
            return View(actions_Log);
        }

        // GET: Actions_LogV/Delete/5
        public ActionResult Delete(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Actions_Log actions_Log = db.Actions_Log.Find(id);
            if (actions_Log == null)
            {
                return HttpNotFound();
            }
            return View(actions_Log);
        }

        // POST: Actions_LogV/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(long id)
        {
            Actions_Log actions_Log = db.Actions_Log.Find(id);
            db.Actions_Log.Remove(actions_Log);
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
