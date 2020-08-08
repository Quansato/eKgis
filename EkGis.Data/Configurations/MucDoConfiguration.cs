using EkGis.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EkGis.Data.Configurations
{
    public class MucDoConfiguration : IEntityTypeConfiguration<MucDo>
    {
        public void Configure(EntityTypeBuilder<MucDo> builder)
        {
            builder.ToTable("MucDo");

            builder.HasKey(x => x.MaMucDo);

            builder.Property(x => x.MaMucDo).UseIdentityColumn();

            builder.Property(x => x.TenMucDo).IsRequired().IsUnicode(true).HasMaxLength(50);
        }
    }
}
