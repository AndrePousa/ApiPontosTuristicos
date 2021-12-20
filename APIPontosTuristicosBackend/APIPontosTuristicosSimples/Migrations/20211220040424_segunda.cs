using Microsoft.EntityFrameworkCore.Migrations;

namespace APIPontosTuristicosSimples.Migrations
{
    public partial class segunda : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_PontoTuristico",
                table: "PontoTuristico");

            migrationBuilder.RenameTable(
                name: "PontoTuristico",
                newName: "PontoTuristico");

            migrationBuilder.AddColumn<string>(
                name: "description",
                table: "PontoTuristico",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_PontoTuristico",
                table: "PontoTuristico",
                column: "id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_PontoTuristico",
                table: "PontoTuristico");

            migrationBuilder.DropColumn(
                name: "description",
                table: "PontoTuristico");

            migrationBuilder.RenameTable(
                name: "PontoTuristico",
                newName: "PontoTuristico");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PontoTuristico",
                table: "PontoTuristico",
                column: "id");
        }
    }
}
