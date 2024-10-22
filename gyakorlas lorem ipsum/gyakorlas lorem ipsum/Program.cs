// 15 bekezdes a mondatok kulon sorban legyenek.
// Kesziteni egy fuggvenyt ami ezt a filet beolvassa egy lisataba és ezt visszaadja ertekkent.
// Kesziteni egy fuggveny ami megkepja a listat es vegrehajt egy muveletet, minden elemen(mondaat).
// Egy fuggveny a muvelet ami megkapja a sort es megkap egy
// szamot hogy a mondat hanyadik szavat kell visszaadnia(lehet egy random szam is vagy megadott szam).
// Ezeket a szavakat osszegyujteni egy lisataba es ezt a listat adja vissza az a fuggveny.


using System.Collections.Generic;


static List<string> olvasas()
{
    List<string> list = new List<string>();
    StreamReader olvas = new StreamReader("lorem.txt");
    while (!olvas.EndOfStream)
    {
        list.Add(olvas.ReadLine());
    }
    olvas.Close();
    return list;
}
static List<string> olvasas2()
{


return new List<string>(); 

}

