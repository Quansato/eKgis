using EkGis.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EkGis.Data.Configurations
{
    public class KhachHangConfiguration : IEntityTypeConfiguration<KhachHang>
    {
        public void Configure(EntityTypeBuilder<KhachHang> builder)
        {
            builder.ToTable("KhachHang");

            builder.HasKey(x => x.MaKH);

            builder.Property(x => x.MaKH).UseIdentityColumn();

            builder.Property(x => x.TenKH).IsRequired().IsUnicode(true).HasMaxLength(50);

            builder.Property(x => x.Email).IsRequired().IsUnicode(true).HasMaxLength(50);

            builder.Property(x => x.SDT).IsRequired().IsUnicode(true).HasMaxLength(11);

            builder.Property(x => x.DiaChi).IsRequired().IsUnicode(true).HasMaxLength(50);
        }
    }
    }
