using EkGis.Application.Catalog.Loais.Dtos;
using EkGis.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EkGis.Application.Catalog.Loais
{
    public interface ILoaiservice
    {
        Task<Loai> Create(Loai request);

        Task<int> Update(int ma, string ten);

        Task<int> Delete(int ma);

        Task<LoaiViewModel> GetByMa(int ma);

        Task<List<LoaiViewModel>> GetAll();
        Task Create(LoaiCreateRequest request);
    }
}
