using EkGis.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EkGis.Data.Configurations
{
    public class YeuCauConfiguration : IEntityTypeConfiguration<YeuCau>
    {
        public void Configure(EntityTypeBuilder<YeuCau> builder)
        {
            builder.ToTable("YeuCau");

            builder.HasKey(x => x.MaYeuCau);

            builder.Property(x => x.MaYeuCau).UseIdentityColumn();

            builder.Property(x => x.Noidung).IsRequired().IsUnicode(true).HasMaxLength(200);

            builder.Property(x => x.DiaDiem).IsRequired().IsUnicode(true).HasMaxLength(200);
           
            builder.Property(x => x.MoTa).IsUnicode(true).HasMaxLength(200);

            builder.HasOne(x => x.Loai).WithMany(y => y.YeuCaus).HasForeignKey(y => y.MaLoai);

            builder.HasOne(x => x.TrangThai).WithMany(y => y.YeuCaus).HasForeignKey(y => y.MaTrangThai);
            
            builder.HasOne(x => x.NhanVien).WithMany(y => y.YeuCaus).HasForeignKey(y => y.MaNV);
            
            builder.HasOne(x => x.MucDo).WithMany(y => y.YeuCaus).HasForeignKey(y => y.MaMucDo);

            builder.HasOne(x => x.KhachHang).WithMany(y => y.YeuCaus).HasForeignKey(y => y.MaKH);
        }
    }
}
