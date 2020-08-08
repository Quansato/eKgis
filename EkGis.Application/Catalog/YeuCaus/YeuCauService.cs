using EkGis.Application.Catalog.YeuCaus.Dtos;
using EkGis.Data.EF;
using EkGis.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EkGis.Application.Catalog.YeuCaus
{
    public class YeuCauService : IYeuCauService
    {
        private EkGisDbContext _context;
        public YeuCauService(EkGisDbContext context)
        {
            _context = context;
        }
        public async Task<int> Create(YeuCauCreateRequest request)
        {
            var yeuCau = new YeuCau()
            {
                MaLoai = request.MaLoai,
                MaTrangThai = request.MaTrangThai,
                MaMucDo = request.MaMucDo,
                MaNV = request.MaNV,
                MaKH = request.MaKH,
                NgayTiepNhan = DateTime.Now,
                Noidung = request.Noidung,
                DiaDiem = request.DiaDiem,
                MoTa = request.MoTa
            };
            _context.YeuCaus.Add(yeuCau);
            await _context.SaveChangesAsync();
            return request.MaYeuCau;
        }

        public async Task<int> Delete(int ma)
        {
            var yeuCau = await _context.YeuCaus.FindAsync(ma);
            if (yeuCau == null) throw new EkGisException($"khong tim thay ma loai : {ma}");
            _context.YeuCaus.Remove(yeuCau);
            return await _context.SaveChangesAsync();
        }

        public async Task<List<YeuCauViewModel>> GetAll()
        {
            var yeuCaus = await _context.YeuCaus.Select(x => new YeuCauViewModel()
            {
                MaYeuCau = x.MaYeuCau,
                MaLoai = x.MaLoai,
                MaTrangThai = x.MaTrangThai,
                MaMucDo = x.MaMucDo,
                MaNV = x.MaNV,
                NgayTiepNhan = x.NgayTiepNhan,
                Noidung = x.Noidung,
                DiaDiem = x.DiaDiem,
                MoTa = x.MoTa
            }).ToListAsync();
            return new List<YeuCauViewModel>(yeuCaus);
        }

        public async Task<PagedResult<YeuCauViewModel>> GetAllPaging(GetYeuCauPagingRequest request)
        {
            //1. Select join
            var query = from a in _context.YeuCaus
                        join b in _context.Loais on a.MaLoai equals b.MaLoai
                        join c in _context.TrangThais on a.MaTrangThai equals c.MaTrangThai
                        join d in _context.NhanViens on a.MaNV equals d.MaNV
                        join e in _context.KhachHangs on a.MaKH equals e.MaKH
                        join f in _context.MucDos on a.MaMucDo equals f.MaMucDo
                        select new { a, b, c, d, e, f };
            //2. filter
            if (!string.IsNullOrEmpty(request.keywords))
                query = query.Where(x => x.a.Noidung.Contains(request.keywords));
            //3. Paging
            int totalRow = await query.CountAsync();

            var data = await query.Skip((request.PageIndex - 1) * request.PageSize)
                       .Take(request.PageSize)
                       .Select(x => new YeuCauViewModel()
                       {
                           NgayTiepNhan = x.a.NgayTiepNhan,
                           Noidung = x.a.Noidung,
                           TenKH = x.e.TenKH,
                           TenLoai = x.b.TenLoai,
                           TenTrangThai = x.c.TenTrangThai
                       }).ToListAsync();
            //4. Select and projection
            var pagedResult = new PagedResult<YeuCauViewModel>()
            {
                TotalRecord = totalRow,
                PageSize = request.PageSize,
                PageIndex = request.PageIndex,
                Items = data
            };
            return pagedResult;
        }

        public async Task<YeuCauViewModel> GetByMa(int ma)
        {
            var yeuCau = await _context.YeuCaus.FindAsync(ma);
            var YeuCauViewModel = new YeuCauViewModel()
            {
                MaYeuCau = yeuCau.MaYeuCau,
                MaLoai = yeuCau.MaLoai,
                MaTrangThai = yeuCau.MaTrangThai,
                MaMucDo = yeuCau.MaMucDo,
                MaNV = yeuCau.MaNV,
                NgayTiepNhan = yeuCau.NgayTiepNhan,
                Noidung = yeuCau.Noidung,
                DiaDiem = yeuCau.DiaDiem,
                MoTa = yeuCau.MoTa
            };
            return YeuCauViewModel;
        }

        public async Task<int> Update(YeuCauEditRequest request)
        {
            var maYeuCau = await _context.YeuCaus.FindAsync(request.MaYeuCau);
            var yeuCau = await _context.YeuCaus.FirstOrDefaultAsync(x => x.MaYeuCau == request.MaYeuCau);
            if (yeuCau == null) throw new EkGisException($"Khong tim thay ma yeu cau: {request.MaYeuCau}");

            yeuCau.MaLoai = request.MaLoai;
            yeuCau.NgayTiepNhan = DateTime.Now;
            yeuCau.MaMucDo = request.MaMucDo;
            yeuCau.Noidung = request.Noidung;
            yeuCau.DiaDiem = request.DiaDiem;
            yeuCau.MaNV = request.MaNV;

            return await _context.SaveChangesAsync();
        }

        public async Task<int> UpdateStatus(int ma, int maStatus, string moTa)
        {
            var maYeuCau = await _context.YeuCaus.FindAsync(ma);
            var yeuCau = await _context.YeuCaus.FirstOrDefaultAsync(x => x.MaYeuCau == ma);
            if (maYeuCau == null) throw new EkGisException($"khong tim thay ma yeu cau: {ma}");

            yeuCau.MaTrangThai = maStatus;
            yeuCau.MoTa = moTa;
            return await _context.SaveChangesAsync();
        }
    }
}
