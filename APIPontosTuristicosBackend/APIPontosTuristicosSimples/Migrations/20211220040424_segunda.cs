using Microsoft.EntityFrameworkCore.Migrations;

namespace APIPontosTuristicosSimples.Migrations
{
    public partial class segunda : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {   
            migrationBuilder.AddColumn<string>(
                name: "description",
                table: "PontoTuristico",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "description",
                table: "PontoTuristico"); 
        }
    }
}
