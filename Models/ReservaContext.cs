using Microsoft.EntityFrameworkCore;
namespace ParcialDotNet.Models
{
public class ReservaContext : DbContext
{
public ReservaContext(DbContextOptions<ReservaContext> options) :
base(options)
{
}
public DbSet<ReservaItem> ReservaItem { get; set; }
}
}