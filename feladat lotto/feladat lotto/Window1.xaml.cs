using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace feladat_lotto
{
    /// <summary>
    /// Interaction logic for Window1.xaml
    /// </summary>
    public partial class Window1 : Window
    {
        MainWindow szulo;
        public Window1(MainWindow szulo)
        {
            InitializeComponent();
            this.szulo = szulo;
        }

        private void button_Click(object sender, RoutedEventArgs e)
        {
            Random random = new Random();
            int[] szamok = new int[5];
            string[] szam;
            for (int i = 0; i < szamok.Length; i++)
            {
                szamok[i] = random.Next(0, 100);
                szulo.textBlock3.Text = szamok[i];
                this.Close();
            }
            
        }
    }
}
