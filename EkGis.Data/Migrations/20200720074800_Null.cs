using Microsoft.EntityFrameworkCore.Migrations;

namespace EkGis.Data.Migrations
{
    public partial class Null : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_YeuCau_KhachHang_MaKH",
                table: "YeuCau");

            migrationBuilder.DropForeignKey(
                name: "FK_YeuCau_MucDo_MaMucDo",
                table: "YeuCau");

            migrationBuilder.DropForeignKey(
                name: "FK_YeuCau_NhanVien_MaNV",
                table: "YeuCau");

            migrationBuilder.AlterColumn<string>(
                name: "MoTa",
                table: "YeuCau",
                maxLength: 200,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(200)",
                oldMaxLength: 200);

            migrationBuilder.AlterColumn<int>(
                name: "MaNV",
                table: "YeuCau",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "MaMucDo",
                table: "YeuCau",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "MaKH",
                table: "YeuCau",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_YeuCau_KhachHang_MaKH",
                table: "YeuCau",
                column: "MaKH",
                principalTable: "KhachHang",
                principalColumn: "MaKH",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_YeuCau_MucDo_MaMucDo",
                table: "YeuCau",
                column: "MaMucDo",
                principalTable: "MucDo",
                principalColumn: "MaMucDo",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_YeuCau_NhanVien_MaNV",
                table: "YeuCau",
                column: "MaNV",
                principalTable: "NhanVien",
                principalColumn: "MaNV",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_YeuCau_KhachHang_MaKH",
                table: "YeuCau");

            migrationBuilder.DropForeignKey(
                name: "FK_YeuCau_MucDo_MaMucDo",
                table: "YeuCau");

            migrationBuilder.DropForeignKey(
                name: "FK_YeuCau_NhanVien_MaNV",
                table: "YeuCau");

            migrationBuilder.AlterColumn<string>(
                name: "MoTa",
                table: "YeuCau",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: false,
                oldClrType: typeof(string),
                oldMaxLength: 200,
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "MaNV",
                table: "YeuCau",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "MaMucDo",
                table: "YeuCau",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "MaKH",
                table: "YeuCau",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_YeuCau_KhachHang_MaKH",
                table: "YeuCau",
                column: "MaKH",
                principalTable: "KhachHang",
                principalColumn: "MaKH",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_YeuCau_MucDo_MaMucDo",
                table: "YeuCau",
                column: "MaMucDo",
                principalTable: "MucDo",
                principalColumn: "MaMucDo",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_YeuCau_NhanVien_MaNV",
                table: "YeuCau",
                column: "MaNV",
                principalTable: "NhanVien",
                principalColumn: "MaNV",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
