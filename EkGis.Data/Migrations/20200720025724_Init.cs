using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EkGis.Data.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "KhachHang",
                columns: table => new
                {
                    MaKH = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenKH = table.Column<string>(maxLength: 50, nullable: false),
                    Email = table.Column<string>(maxLength: 50, nullable: false),
                    SDT = table.Column<string>(maxLength: 11, nullable: false),
                    DiaChi = table.Column<string>(maxLength: 50, nullable: false),
                    NgaySinh = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KhachHang", x => x.MaKH);
                });

            migrationBuilder.CreateTable(
                name: "Loai",
                columns: table => new
                {
                    MaLoai = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenLoai = table.Column<string>(maxLength: 50, nullable: false),
                    NgayTao = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Loai", x => x.MaLoai);
                });

            migrationBuilder.CreateTable(
                name: "MucDo",
                columns: table => new
                {
                    MaMucDo = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenMucDo = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MucDo", x => x.MaMucDo);
                });

            migrationBuilder.CreateTable(
                name: "NhanVien",
                columns: table => new
                {
                    MaNV = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenNV = table.Column<string>(maxLength: 50, nullable: false),
                    ChucVu = table.Column<string>(maxLength: 50, nullable: false),
                    Email = table.Column<string>(maxLength: 50, nullable: false),
                    SDT = table.Column<string>(maxLength: 11, nullable: false),
                    DiaChi = table.Column<string>(maxLength: 50, nullable: false),
                    NgaySinh = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NhanVien", x => x.MaNV);
                });

            migrationBuilder.CreateTable(
                name: "TrangThai",
                columns: table => new
                {
                    MaTrangThai = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TenTrangThai = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrangThai", x => x.MaTrangThai);
                });

            migrationBuilder.CreateTable(
                name: "YeuCau",
                columns: table => new
                {
                    MaYeuCau = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MaLoai = table.Column<int>(nullable: false),
                    MaTrangThai = table.Column<int>(nullable: false),
                    MaMucDo = table.Column<int>(nullable: false),
                    MaNV = table.Column<int>(nullable: false),
                    MaKH = table.Column<int>(nullable: false),
                    NgayTiepNhan = table.Column<DateTime>(nullable: false),
                    Noidung = table.Column<string>(maxLength: 200, nullable: false),
                    DiaDiem = table.Column<string>(maxLength: 200, nullable: false),
                    MoTa = table.Column<string>(maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_YeuCau", x => x.MaYeuCau);
                    table.ForeignKey(
                        name: "FK_YeuCau_KhachHang_MaKH",
                        column: x => x.MaKH,
                        principalTable: "KhachHang",
                        principalColumn: "MaKH",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_YeuCau_Loai_MaLoai",
                        column: x => x.MaLoai,
                        principalTable: "Loai",
                        principalColumn: "MaLoai",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_YeuCau_MucDo_MaMucDo",
                        column: x => x.MaMucDo,
                        principalTable: "MucDo",
                        principalColumn: "MaMucDo",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_YeuCau_NhanVien_MaNV",
                        column: x => x.MaNV,
                        principalTable: "NhanVien",
                        principalColumn: "MaNV",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_YeuCau_TrangThai_MaTrangThai",
                        column: x => x.MaTrangThai,
                        principalTable: "TrangThai",
                        principalColumn: "MaTrangThai",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_YeuCau_MaKH",
                table: "YeuCau",
                column: "MaKH");

            migrationBuilder.CreateIndex(
                name: "IX_YeuCau_MaLoai",
                table: "YeuCau",
                column: "MaLoai");

            migrationBuilder.CreateIndex(
                name: "IX_YeuCau_MaMucDo",
                table: "YeuCau",
                column: "MaMucDo");

            migrationBuilder.CreateIndex(
                name: "IX_YeuCau_MaNV",
                table: "YeuCau",
                column: "MaNV");

            migrationBuilder.CreateIndex(
                name: "IX_YeuCau_MaTrangThai",
                table: "YeuCau",
                column: "MaTrangThai");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "YeuCau");

            migrationBuilder.DropTable(
                name: "KhachHang");

            migrationBuilder.DropTable(
                name: "Loai");

            migrationBuilder.DropTable(
                name: "MucDo");

            migrationBuilder.DropTable(
                name: "NhanVien");

            migrationBuilder.DropTable(
                name: "TrangThai");
        }
    }
}
