# Generated by Django 4.1.1 on 2022-09-18 10:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kutuphane', '0029_rename_whyi̇mportant_atiktypes_whyimportant'),
    ]

    operations = [
        migrations.CreateModel(
            name='Map_file',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('csv_file', models.FileField(default='', help_text='csv', upload_to='')),
                ('csv_id', models.CharField(default='', help_text='dropdownda bulunan id', max_length=5)),
                ('csv_mark', models.TextField(default='', help_text='name of code')),
            ],
        ),
    ]
