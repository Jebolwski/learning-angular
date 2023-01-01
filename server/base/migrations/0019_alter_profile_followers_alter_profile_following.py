# Generated by Django 4.0 on 2022-12-16 17:43

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0018_rename_name_interest_en_name_interest_tr_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='followers',
            field=models.ManyToManyField(blank=True, default=None, related_name='Followers', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='profile',
            name='following',
            field=models.ManyToManyField(blank=True, default=None, related_name='Followings', to=settings.AUTH_USER_MODEL),
        ),
    ]
