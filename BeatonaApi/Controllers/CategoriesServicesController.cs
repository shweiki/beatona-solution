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
    public class cccController : ApiController
    {
        private BeatonaEntities db = new BeatonaEntities();

        // GET: api/CategoriesServices
        public List<CategoriesService> GetCategoriesServices()
        {

            return db.CategoriesServices.Include(m => m.Services).ToList();
        }

        // GET: api/CategoriesServices/5
        [ResponseType(typeof(CategoriesService))]
        public IHttpActionResult GetCategoriesService(long id)
        {
            CategoriesService categoriesService = db.CategoriesServices.Find(id);
            if (categoriesService == null)
            {
                return NotFound();
            }

            return Ok(categoriesService);
        }

        // PUT: api/CategoriesServices/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCategoriesService(long id, CategoriesService categoriesService)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != categoriesService.id)
            {
                return BadRequest();
            }

            db.Entry(categoriesService).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoriesServiceExists(id))
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

        // POST: api/CategoriesServices
        [ResponseType(typeof(CategoriesService))]
        public IHttpActionResult PostCategoriesService(CategoriesService categoriesService)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CategoriesServices.Add(categoriesService);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = categoriesService.id }, categoriesService);
        }

        // DELETE: api/CategoriesServices/5
        [ResponseType(typeof(CategoriesService))]
        public IHttpActionResult DeleteCategoriesService(long id)
        {
            CategoriesService categoriesService = db.CategoriesServices.Find(id);
            if (categoriesService == null)
            {
                return NotFound();
            }

            db.CategoriesServices.Remove(categoriesService);
            db.SaveChanges();

            return Ok(categoriesService);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CategoriesServiceExists(long id)
        {
            return db.CategoriesServices.Count(e => e.id == id) > 0;
        }
    }
}