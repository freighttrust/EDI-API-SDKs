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


class EdiFabricWebApiModelsValidateSettings(object):
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
        'syntax_set': 'str',
        'decimal_point': 'str',
        'skip_trailer_validation': 'bool'
    }

    attribute_map = {
        'syntax_set': 'syntax_set',
        'decimal_point': 'decimal_point',
        'skip_trailer_validation': 'skip_trailer_validation'
    }

    def __init__(self, syntax_set=None, decimal_point=None, skip_trailer_validation=None):  # noqa: E501
        """EdiFabricWebApiModelsValidateSettings - a model defined in Swagger"""  # noqa: E501

        self._syntax_set = None
        self._decimal_point = None
        self._skip_trailer_validation = None
        self.discriminator = None

        if syntax_set is not None:
            self.syntax_set = syntax_set
        if decimal_point is not None:
            self.decimal_point = decimal_point
        if skip_trailer_validation is not None:
            self.skip_trailer_validation = skip_trailer_validation

    @property
    def syntax_set(self):
        """Gets the syntax_set of this EdiFabricWebApiModelsValidateSettings.  # noqa: E501


        :return: The syntax_set of this EdiFabricWebApiModelsValidateSettings.  # noqa: E501
        :rtype: str
        """
        return self._syntax_set

    @syntax_set.setter
    def syntax_set(self, syntax_set):
        """Sets the syntax_set of this EdiFabricWebApiModelsValidateSettings.


        :param syntax_set: The syntax_set of this EdiFabricWebApiModelsValidateSettings.  # noqa: E501
        :type: str
        """

        self._syntax_set = syntax_set

    @property
    def decimal_point(self):
        """Gets the decimal_point of this EdiFabricWebApiModelsValidateSettings.  # noqa: E501


        :return: The decimal_point of this EdiFabricWebApiModelsValidateSettings.  # noqa: E501
        :rtype: str
        """
        return self._decimal_point

    @decimal_point.setter
    def decimal_point(self, decimal_point):
        """Sets the decimal_point of this EdiFabricWebApiModelsValidateSettings.


        :param decimal_point: The decimal_point of this EdiFabricWebApiModelsValidateSettings.  # noqa: E501
        :type: str
        """

        self._decimal_point = decimal_point

    @property
    def skip_trailer_validation(self):
        """Gets the skip_trailer_validation of this EdiFabricWebApiModelsValidateSettings.  # noqa: E501


        :return: The skip_trailer_validation of this EdiFabricWebApiModelsValidateSettings.  # noqa: E501
        :rtype: bool
        """
        return self._skip_trailer_validation

    @skip_trailer_validation.setter
    def skip_trailer_validation(self, skip_trailer_validation):
        """Sets the skip_trailer_validation of this EdiFabricWebApiModelsValidateSettings.


        :param skip_trailer_validation: The skip_trailer_validation of this EdiFabricWebApiModelsValidateSettings.  # noqa: E501
        :type: bool
        """

        self._skip_trailer_validation = skip_trailer_validation

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
        if issubclass(EdiFabricWebApiModelsValidateSettings, dict):
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
        if not isinstance(other, EdiFabricWebApiModelsValidateSettings):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other