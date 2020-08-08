using EkGis.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EkGis.Data.Configurations
{
    public class TrangThaiConfiguration : IEntityTypeConfiguration<TrangThai>
    {
        public void Configure(EntityTypeBuilder<TrangThai> builder)
        {
            builder.ToTable("TrangThai");

            builder.HasKey(x => x.MaTrangThai);

            builder.Property(x => x.MaTrangThai).UseIdentityColumn();

            builder.Property(x => x.TenTrangThai).IsRequired().IsUnicode(true).HasMaxLength(50);
        }
    }
}
