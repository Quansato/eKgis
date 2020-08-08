using System.Threading.Tasks;
using EkGis.Application.Catalog.YeuCaus;
using EkGis.Application.Catalog.YeuCaus.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace EkGis_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class YeuCauController : ControllerBase
    {
        private readonly IYeuCauService _yeuCauService;
        public YeuCauController(IYeuCauService yeuCauService)
        {
            _yeuCauService = yeuCauService;
        }

        [HttpGet()]
        public async Task<IActionResult> GetAll()
        {
            var yeuCaus = await _yeuCauService.GetAll();
            return Ok(yeuCaus);
        }
        /*[HttpGet]
        public async Task<IActionResult> GetAllPaging([FromQuery] GetYeuCauPagingRequest request)
        {
            var yeuCaus = await _yeuCauService.GetAllPaging(request);
            return Ok(yeuCaus);
        }*/
        [HttpGet("{ma}")]
        public async Task<IActionResult> GetByMa(int ma)
        {
            var yeuCau = await _yeuCauService.GetByMa(ma);
            if (yeuCau == null)
                return BadRequest("khong tim thay yeu cau");
            return Ok(yeuCau);
        }
        [HttpPut]
        public async Task<IActionResult> Update([FromForm] YeuCauEditRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var result = await _yeuCauService.Update(request);
            if (result == null)
            {
                return BadRequest();
            }
            return Ok();
        }
        [HttpPost]
        public async Task<IActionResult> Create([FromForm] YeuCauCreateRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var maYeuCau = await _yeuCauService.Create(request);
            if (maYeuCau == null)
                return BadRequest();

            return CreatedAtAction(nameof(GetByMa), new { maYeuCau = request.MaYeuCau }, request);
        }
        [HttpDelete("{ma}")]
        public async Task<IActionResult> DeleTe(int ma)
        {
            var result = await _yeuCauService.Delete(ma);
            if (result == null)
                return BadRequest();
            return Ok();
        }
        [HttpPut("{maYeuCau1}/{maStatus}/{moTa}")]
        public async Task<IActionResult> UpdateStatus(int maYeuCau1, int maStatus, string moTa)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var result = await _yeuCauService.UpdateStatus(maYeuCau1, maStatus, moTa);
            if (result == null)
            {
                return BadRequest();
            }
            return Ok();
        }
    }
}
