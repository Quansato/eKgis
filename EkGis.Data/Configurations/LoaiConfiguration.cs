using EkGis.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EkGis.Data.Configurations
{
    public class LoaiConfiguration : IEntityTypeConfiguration<Loai>
    {
        public void Configure(EntityTypeBuilder<Loai> builder)
        {
            builder.ToTable("Loai");

            builder.HasKey(x => x.MaLoai);

            builder.Property(x => x.MaLoai).UseIdentityColumn();

            builder.Property(x => x.TenLoai).IsRequired().IsUnicode(true).HasMaxLength(50);
        }
    }
}
