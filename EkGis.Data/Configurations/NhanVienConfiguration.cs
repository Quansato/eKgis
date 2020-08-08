using EkGis.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EkGis.Data.Configurations
{
    class NhanVienConfiguration : IEntityTypeConfiguration<NhanVien>
    {
        public void Configure(EntityTypeBuilder<NhanVien> builder)
        {
            builder.ToTable("NhanVien");

            builder.HasKey(x => x.MaNV);

            builder.Property(x => x.MaNV).UseIdentityColumn();

            builder.Property(x => x.TenNV).IsRequired().IsUnicode(true).HasMaxLength(50);

            builder.Property(x => x.ChucVu).IsRequired().IsUnicode(true).HasMaxLength(50);

            builder.Property(x => x.Email).IsRequired().IsUnicode(true).HasMaxLength(50);

            builder.Property(x => x.SDT).IsRequired().IsUnicode(true).HasMaxLength(11);

            builder.Property(x => x.DiaChi).IsRequired().IsUnicode(true).HasMaxLength(50);
        }
    }
}
