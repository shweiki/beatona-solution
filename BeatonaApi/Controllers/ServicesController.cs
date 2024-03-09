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
    public class ServicesController : ApiController
    {
        private BeatonaEntities db = new BeatonaEntities();

        // GET: api/Services
        public List<Service> GetServices()
        {
            return db.Services.ToList();
        }

        // GET: api/Services/5
        [ResponseType(typeof(Service))]
        public IHttpActionResult GetService(long id)
        {
            Service service = db.Services.Find(id);
            if (service == null)
            {
                return NotFound();
            }

            return Ok(service);
        }

        // PUT: api/Services/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutService(long id, Service service)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != service.id)
            {
                return BadRequest();
            }

            db.Entry(service).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServiceExists(id))
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

        // POST: api/Services
        [ResponseType(typeof(Service))]
        public IHttpActionResult PostService(Service service)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Services.Add(service);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = service.id }, service);
        }

        // DELETE: api/Services/5
        [ResponseType(typeof(Service))]
        public IHttpActionResult DeleteService(long id)
        {
            Service service = db.Services.Find(id);
            if (service == null)
            {
                return NotFound();
            }

            db.Services.Remove(service);
            db.SaveChanges();

            return Ok(service);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ServiceExists(long id)
        {
            return db.Services.Count(e => e.id == id) > 0;
        }
    }
}