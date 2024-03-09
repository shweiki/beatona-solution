using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using BeatonaApi.Models;

namespace BeatonaApi.Controllers
{
    public class Actions_LogController : ApiController
    {
        private BeatonaEntities db = new BeatonaEntities();

        // GET: api/Actions_Log
        public List<Actions_Log> GetActions_Log()
        {
            return db.Actions_Log.ToList();
        }

        // GET: api/Actions_Log/5
        [ResponseType(typeof(Actions_Log))]
        public IHttpActionResult GetActions_Log(long id)
        {
            Actions_Log actions_Log = db.Actions_Log.Find(id);
            if (actions_Log == null)
            {
                return NotFound();
            }

            return Ok(actions_Log);
        }

        // PUT: api/Actions_Log/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutActions_Log(long id, Actions_Log actions_Log)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != actions_Log.Action_id)
            {
                return BadRequest();
            }

            db.Entry(actions_Log).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Actions_LogExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Actions_Log
        [ResponseType(typeof(Actions_Log))]
        public IHttpActionResult PostActions_Log(Actions_Log actions_Log)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Actions_Log.Add(actions_Log);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = actions_Log.Action_id }, actions_Log);
        }

        // DELETE: api/Actions_Log/5
        [ResponseType(typeof(Actions_Log))]
        public IHttpActionResult DeleteActions_Log(long id)
        {
            Actions_Log actions_Log = db.Actions_Log.Find(id);
            if (actions_Log == null)
            {
                return NotFound();
            }

            db.Actions_Log.Remove(actions_Log);
            db.SaveChanges();

            return Ok(actions_Log);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Actions_LogExists(long id)
        {
            return db.Actions_Log.Count(e => e.Action_id == id) > 0;
        }
    }
}