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
    public class WasteTypesController : ApiController
    {
        private BeatonaEntities db = new BeatonaEntities();

        // GET: api/WasteTypes
        public IList<WasteType> GetWasteTypes()
        {
            return db.WasteTypes.ToList();
        }

        // GET: api/WasteTypes/5
        [ResponseType(typeof(WasteType))]
        public IHttpActionResult GetWasteType(long id)
        {
            WasteType wasteType = db.WasteTypes.Find(id);
            if (wasteType == null)
            {
                return NotFound();
            }

            return Ok(wasteType);
        }

        // PUT: api/WasteTypes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutWasteType(long id, WasteType wasteType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != wasteType.Id)
            {
                return BadRequest();
            }

            db.Entry(wasteType).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WasteTypeExists(id))
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

        // POST: api/WasteTypes
        [ResponseType(typeof(WasteType))]
        public IHttpActionResult PostWasteType(WasteType wasteType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.WasteTypes.Add(wasteType);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = wasteType.Id }, wasteType);
        }

        // DELETE: api/WasteTypes/5
        [ResponseType(typeof(WasteType))]
        public IHttpActionResult DeleteWasteType(long id)
        {
            WasteType wasteType = db.WasteTypes.Find(id);
            if (wasteType == null)
            {
                return NotFound();
            }

            db.WasteTypes.Remove(wasteType);
            db.SaveChanges();

            return Ok(wasteType);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool WasteTypeExists(long id)
        {
            return db.WasteTypes.Count(e => e.Id == id) > 0;
        }
    }
}