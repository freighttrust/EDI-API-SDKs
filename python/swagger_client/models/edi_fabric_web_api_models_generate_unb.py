# coding: utf-8

"""
    EdiFabric API

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: v1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from swagger_client.models.edi_fabric_core_model_edi_edifact_unb import EdiFabricCoreModelEdiEdifactUNB  # noqa: F401,E501
from swagger_client.models.edi_fabric_web_api_models_generate_settings import EdiFabricWebApiModelsGenerateSettings  # noqa: F401,E501


class EdiFabricWebApiModelsGenerateUnb(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'settings': 'EdiFabricWebApiModelsGenerateSettings',
        'unb': 'EdiFabricCoreModelEdiEdifactUNB'
    }

    attribute_map = {
        'settings': 'settings',
        'unb': 'unb'
    }

    def __init__(self, settings=None, unb=None):  # noqa: E501
        """EdiFabricWebApiModelsGenerateUnb - a model defined in Swagger"""  # noqa: E501

        self._settings = None
        self._unb = None
        self.discriminator = None

        if settings is not None:
            self.settings = settings
        if unb is not None:
            self.unb = unb

    @property
    def settings(self):
        """Gets the settings of this EdiFabricWebApiModelsGenerateUnb.  # noqa: E501


        :return: The settings of this EdiFabricWebApiModelsGenerateUnb.  # noqa: E501
        :rtype: EdiFabricWebApiModelsGenerateSettings
        """
        return self._settings

    @settings.setter
    def settings(self, settings):
        """Sets the settings of this EdiFabricWebApiModelsGenerateUnb.


        :param settings: The settings of this EdiFabricWebApiModelsGenerateUnb.  # noqa: E501
        :type: EdiFabricWebApiModelsGenerateSettings
        """

        self._settings = settings

    @property
    def unb(self):
        """Gets the unb of this EdiFabricWebApiModelsGenerateUnb.  # noqa: E501


        :return: The unb of this EdiFabricWebApiModelsGenerateUnb.  # noqa: E501
        :rtype: EdiFabricCoreModelEdiEdifactUNB
        """
        return self._unb

    @unb.setter
    def unb(self, unb):
        """Sets the unb of this EdiFabricWebApiModelsGenerateUnb.


        :param unb: The unb of this EdiFabricWebApiModelsGenerateUnb.  # noqa: E501
        :type: EdiFabricCoreModelEdiEdifactUNB
        """

        self._unb = unb

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(EdiFabricWebApiModelsGenerateUnb, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, EdiFabricWebApiModelsGenerateUnb):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
