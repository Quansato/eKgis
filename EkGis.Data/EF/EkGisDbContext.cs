using EkGis.Data.Configurations;
using EkGis.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace EkGis.Data.EF
{
    public class EkGisDbContext : DbContext
    {
        public EkGisDbContext( DbContextOptions options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new LoaiConfiguration());
            modelBuilder.ApplyConfiguration(new MucDoConfiguration());
            modelBuilder.ApplyConfiguration(new NhanVienConfiguration());
            modelBuilder.ApplyConfiguration(new TrangThaiConfiguration());
            modelBuilder.ApplyConfiguration(new YeuCauConfiguration());
            modelBuilder.ApplyConfiguration(new KhachHangConfiguration());
        }

        public DbSet<Loai> Loais { get; set; }
        public DbSet<MucDo> MucDos { get; set; }
        public DbSet<TrangThai> TrangThais { get; set; }
        public DbSet<NhanVien> NhanViens { get; set; }
        public DbSet<KhachHang> KhachHangs { get; set; }
        public DbSet<YeuCau> YeuCaus { get; set; }

    }
}
