# Generated by Django 4.0 on 2022-11-19 09:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_alter_profile_profilepic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='profilePic',
            field=models.ImageField(blank=True, default='profilePic/default.jpg', upload_to='profilePic'),
        ),
    ]
