using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace EkGis.Data.EF
{
    public class EkGisDbContextFactory : IDesignTimeDbContextFactory<EkGisDbContext>
    {
        public EkGisDbContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
              .SetBasePath(Directory.GetCurrentDirectory())
              .AddJsonFile("appsettings.json")
              .Build();

            var connectionString = configuration.GetConnectionString("Ekgis");

            var optionsBuilder = new DbContextOptionsBuilder<EkGisDbContext>();

            optionsBuilder.UseSqlServer(connectionString);

            return new EkGisDbContext(optionsBuilder.Options);
        }
    }
}
