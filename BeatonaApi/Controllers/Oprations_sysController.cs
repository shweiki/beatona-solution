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
    public class Oprations_sysController : ApiController
    {
        private BeatonaEntities db = new BeatonaEntities();

        // GET: api/Oprations_sys
        public List<Oprations_sys> GetOprations_sys()
        {
            return db.Oprations_sys.ToList();
        }

        // GET: api/Oprations_sys/5
        [ResponseType(typeof(Oprations_sys))]
        public IHttpActionResult GetOprations_sys(int id)
        {
            Oprations_sys oprations_sys = db.Oprations_sys.Find(id);
            if (oprations_sys == null)
            {
                return NotFound();
            }

            return Ok(oprations_sys);
        }

        // PUT: api/Oprations_sys/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutOprations_sys(int id, Oprations_sys oprations_sys)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != oprations_sys.Opration_id)
            {
                return BadRequest();
            }

            db.Entry(oprations_sys).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Oprations_sysExists(id))
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

        // POST: api/Oprations_sys
        [ResponseType(typeof(Oprations_sys))]
        public IHttpActionResult PostOprations_sys(Oprations_sys oprations_sys)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Oprations_sys.Add(oprations_sys);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = oprations_sys.Opration_id }, oprations_sys);
        }

        // DELETE: api/Oprations_sys/5
        [ResponseType(typeof(Oprations_sys))]
        public IHttpActionResult DeleteOprations_sys(int id)
        {
            Oprations_sys oprations_sys = db.Oprations_sys.Find(id);
            if (oprations_sys == null)
            {
                return NotFound();
            }

            db.Oprations_sys.Remove(oprations_sys);
            db.SaveChanges();

            return Ok(oprations_sys);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Oprations_sysExists(int id)
        {
            return db.Oprations_sys.Count(e => e.Opration_id == id) > 0;
        }
    }
}