using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace APIPontosTuristicosSimples.Migrations
{
    public partial class dates : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "date",
                table: "PontoTuristico",
                newName: "created");

            migrationBuilder.AddColumn<DateTime>(
                name: "updated",
                table: "PontoTuristico",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "updated",
                table: "PontoTuristico");

            migrationBuilder.RenameColumn(
                name: "created",
                table: "PontoTuristico",
                newName: "date");
        }
    }
}
