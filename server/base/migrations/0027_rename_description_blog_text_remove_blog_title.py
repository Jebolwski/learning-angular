# Generated by Django 4.0 on 2022-12-20 10:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0026_blog_likes'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blog',
            old_name='description',
            new_name='text',
        ),
        migrations.RemoveField(
            model_name='blog',
            name='title',
        ),
    ]
